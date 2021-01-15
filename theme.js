import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    styles: {
        global: {
          // styles for the `body`
          body: {
            height:"100vh",
            bg: "transparent linear-gradient(120deg, #6DD589 0%, #3B8DD5 100%) 0% 0% no-repeat padding-box",
            color: "white",
            pl:"15px",
            pr:"15px",
            pt:"35px",
            margin: "10px"
            

          },
          // styles for the `a`
          a: {
            color: "teal.500",
            _hover: {
              textDecoration: "underline",
            },
          },
          p:{
            color:"Black"
          },
          h1: {
            font:"normal normal bold 34px/51px Poppins",
            color:"Black"
          },
          h5:{
            font:"normal normal 300 16px/25px Poppins",
            color:"Black"
          }
        },
      },
  components: {
    Button: {
      // 1. We can update the base styles
        baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
        borderRadius: "28px",
        border:"2px"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },
    },
  },
})
export default theme