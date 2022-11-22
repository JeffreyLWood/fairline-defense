import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import {alpha, styled} from '@material-ui/core/styles'

const FDPasswordField = styled(props => (
          <TextField
          InputProps={
            {
            disableUnderline: true,
            endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={props.handleClickShowPassword}
              edge="end"
            >
              {props.type === 'text' ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
            ),
        }} {...props}
          />
))(({theme}) => ({
    '& label.Mui-focused': {
      color: '#00abe1'
    },
    '& .MuiFormHelperText-root': {
      color: '#FFF'
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: '#f44336'
    },
    '& .MuiFilledInput-root': {
      border: '1px solid #e2e2e1',
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: '#FFF',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow'
      ]),
      '&:hover': {
        backgroundColor: '#FFF'
      },
      '&.Mui-focused': {
        backgroundColor: '#FFF',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: `#00abe1`
      }
    }
  })
)

export default FDPasswordField

//   InputProps={
//                 {
//                 endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {value.showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//                 ),
//             }}