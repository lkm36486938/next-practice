import { CSSProperties } from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 3rem;
    margin-left: 3rem;
`;

const CardContainer = styled.div`
    display: flex;
    padding: 0 2rem;
    flex-wrap: wrap;
`;

const CardStyle: CSSProperties = {
    width: "240px",
    marginRight: "1rem",
    marginBottom: "1rem",
    minHeight: "314px",
};

export { Title, CardContainer, CardStyle };
