import styled from 'styled-components';
import SearchIcon from '../SearchIcon.png'

const SearchBarContainer = styled.div`
width: 250px;
height: 100%; 
display: flex; 
justify-content: center;
align-items: center;
`


const SearchBarWrapper = styled.div`
    width: 80%;
    height: 60%;
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: #ffff;
    border: solid 0.5px #cecece;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    > .search-icon {
        width: 15px;
        height: 15px;
        margin: 0 3%;
    }

    > .search-input {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        border: none;
        outline: transparent;
        font-size: 0.8rem;
    }
`

const SearchBar= ({setKeyword}) => {

    return (
        <SearchBarContainer>
            <SearchBarWrapper>
                <img className="search-icon" src={SearchIcon} />
                <input className="search-input" type='text' placeholder='Search by keywords' onChange={ (event) => setKeyword(event.target.value)} />
            </SearchBarWrapper>
        </SearchBarContainer>
    )
}

export default SearchBar