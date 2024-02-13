import axios from "@/utils/axios";
import { LocalStorage } from "@/utils/localstorage";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserState = {
  blocked: boolean;
  confirmed: boolean;
  createdAt: string;
  email: string;
  id: Number;
  updatedAt: string;
  username: string;
  token: string;
  login: boolean;
};

const initialUserState: UserState = {
  email: "",
  username: "",
  id: 0,
  createdAt: "",
  updatedAt: "",
  blocked: false,
  confirmed: false,
  token: "",
  login: false,
};

type MainProviderProps = {
  children: React.ReactNode;
};

type MainProviderContextType = {
  userState: UserState;
  setUserState: React.Dispatch<React.SetStateAction<UserState>>;
};

const initialState: MainProviderContextType = {
  userState: initialUserState,
  setUserState: () => {},
};

function resetState(stateSetter: any) {
  stateSetter({ ...initialState });
}

const MainProviderContext = createContext(initialState);

export function MainProvider({ children, ...props }: MainProviderProps) {
  const [userState, setUserState] = useState(initialUserState);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const token = LocalStorage.getItem("token");
        if (token) {
          const response = await axios.get("api/users/me", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (response?.status !== 200) {
            resetState(setUserState);
            LocalStorage.removeItem("token");
            navigate("/");
          } else {
            setUserState({ ...response.data, login: true, token });
          }
        } else {
          LocalStorage.removeItem("token");
          resetState(setUserState);
          navigate("/");
        }
      } catch (e: any) {
        console.error(e);
      }
    })();
  }, []);

  const value = {
    userState,
    setUserState,
  };

  return (
    <MainProviderContext.Provider {...props} value={value}>
      {children}
    </MainProviderContext.Provider>
  );
}

export const useMain = () => {
  const context = useContext(MainProviderContext);

  if (context === undefined)
    throw new Error("useMain must be used within a MainProvider");

  return context;
};
