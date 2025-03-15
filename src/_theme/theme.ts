import { createTheme } from '@mui/material/styles'

import { BYZANTIUM, GREEN_BLUE } from '@/_theme/palette'

const theme = createTheme({
  palette: {
    primary: {
      main: GREEN_BLUE,
    },
    secondary: {
      main: BYZANTIUM,
    },
  },
})

export default theme
