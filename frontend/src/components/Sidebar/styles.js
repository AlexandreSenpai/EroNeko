import styled from 'styled-components';

export const SidebarContainer = styled.aside`
    min-width: 25rem;
    min-height: 100vh;
    background: #242426;
    padding: 2rem 0;
    margin-right: 1rem;
    display: ${props => props.sidebarStatus};
`;

export const UnorderedList = styled.ul`
    list-style: none;
`;

export const ListItem = styled.li`
    font-size: 1.5rem;
    padding: 1rem 4rem;
    display: flex;
    align-items: center;

    svg{
        color: #e72b69;
        margin-right: 1rem;
    }

    :hover{
        background: #303030;
        cursor: pointer;
    }
`;

export const Separator = styled.hr`
    opacity: .3;
    margin: 1rem;
`;