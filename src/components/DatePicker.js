import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'


const CalenderContainer = styled.div`
width: 100%;
height: 20%;
display: flex;
align-items: center;
justify-content: center;
`
const InputCalendar = styled.input`
width: 75%;
height: 70%;
font-size: 0.7rem;
margin-left: 15px;
padding-left: 5px;
border: ${(props) => (props.readOnly ? "none" : null )};
outline: ${(props) => (props.readOnly ? "transparent" : null)};
`;

const DatePickerComponent = ({todo}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <CalenderContainer>
      <DatePicker 
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate = {new Date()}
        dateFormat = "yyyy.MM.dd"
        readOnly={!todo.onEdit}
        customInput={<InputCalendar />}
        wrapperClassName="custom-datepicker-wrapper"
      />
      <FontAwesomeIcon icon={faCalendarDays} />
    </CalenderContainer>
  );
};

export default DatePickerComponent