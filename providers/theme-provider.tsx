// "use client";

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

// export default function ThemeProvider({
//   children,
//   ...props
// }: ThemeProviderProps) {
//   return (
//     <NextThemesProvider

//       {...props}
//     >
//       {children}
//     </NextThemesProvider>
//   );
// }

// correction dans la cas de bug de class darkmode
"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true); // On monte le composant
  }, []);

  if (!mounted) {
    return null; // Ne rien rendre jusqu'à ce que le composant soit monté
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;
