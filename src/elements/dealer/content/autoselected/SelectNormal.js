import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const  Normal = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]
const SelectNormal = () => {
  return (
      <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={ Normal }
          sx={ { width: 200, height : 44 } }
          renderInput={ ( params ) => <TextField { ...params } label="Movie" /> }
      />
  )
}

export default SelectNormal