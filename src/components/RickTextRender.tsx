import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Link } from "react-router-dom";

export default function RickTextRender({ content }: { content: any }) {
  return (
    <>
      <BlocksRenderer
        blocks={{
          // You can use the default components to set class names...
          paragraph: ({ children }) => (
            <p className="text-black min-w-full min-h-5 h-max md:text-lg font-montserrat">{children}</p>
          ),
          image: (props) => (
            <img
              src={props.image.url}
              alt={"decoration"}
              className="w-full object-cover object-center"
            />
          ),
          list: (props) => {
            return (
              <ul className="list-disc ml-4">
                {(props as any)?.children.map((item: any) => (
                  <li className="font-montserrat">{item}</li>
                ))}
              </ul>
            );
          },
          // ...or point to a design system
          heading: ({ children, level }) => {
            switch (level) {
              case 1:
                return (
                  <h1 className="text-black font-open-sans text-3xl md:text-5xl font-bold capitalize">
                    {children}
                  </h1>
                );
              case 2:
                return (
                  <h2 className="text-black font-open-sans text-2xl md:text-4xl font-bold capitalize">
                    {children}
                  </h2>
                );
              case 3:
                return (
                  <h3 className="text-black font-open-sans font-bold text-xl md:text-3xl capitalize">
                    {children}
                  </h3>
                );
              case 4:
                return (
                  <h4 className="text-black font-open-sans font-bold text-lg md:text-2xl capitalize">
                    {children}
                  </h4>
                );
              case 5:
                return (
                  <h5 className="text-black font-open-sans font-bold text-xl capitalize">
                    {children}
                  </h5>
                );
              case 6:
                return (
                  <h6 className="text-black font-open-sans font-bold text-lg capitalize">
                    {children}
                  </h6>
                );
              default:
                return (
                  <p className="text-black md:text-lg font-montserrat">
                    {children}
                  </p>
                );
            }
          },
          // For links, you may want to use the component from your router or framework
          link: ({ children, url }) => <Link to={url}>{children}</Link>,
        }}
        modifiers={{
          bold: ({ children }) => <strong>{children}</strong>,
          italic: ({ children }) => <span className="italic">{children}</span>,
        }}
        content={content}
      />
    </>
  );
}
