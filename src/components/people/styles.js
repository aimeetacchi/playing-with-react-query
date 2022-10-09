
import styled from "styled-components";

const PeopleStyles = styled.div`

    .people {
        border: 3px solid #2c2c2c;
        padding: 20px;
        margin: 0;
        max-width: 650px;
        margin: auto;
        border-radius: 4px;
        background-color: #050505;
        margin-bottom: 10px;
        
        &__container {
            display: flex;
            flex-wrap: wrap;
        }
    }
    .button-container {
        margin-bottom: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button:disabled {
            opacity: 0.2;
            cursor: not-allowed;
        }
    }
`;

export default PeopleStyles






