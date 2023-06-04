import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { useState } from 'react';
const SelectedDatetime = () => {
    const [ value, setValue ] = useState( dayjs( '2022-04-07' ) );
  return (
      <LocalizationProvider dateAdapter={ AdapterDayjs }>
          <DateTimePicker
              renderInput={ ( props ) => <TextField { ...props } /> }
              label="DateTimePicker"
              value={ value }
              onChange={ ( newValue ) => {
                  setValue( newValue );
              } }
          />
      </LocalizationProvider>
  )
}

export default SelectedDatetime