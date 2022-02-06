import styled from 'styled-components'

const Form = styled.form`
background-color: #eee5d1;
align-content: center;
padding: 50px;
border: 1px #2d2232 solid;
border-radius: 20px;
display: block;
margin-left: auto;
margin-right: auto;
width: 40%
`;

const Input = styled.input`
padding: 0.5em;
color: #073421;
background: fff;
border: none;
border-radius: 3px;
width: 100%;
margin-bottom: 1.5em;
margin-top: 0.5em;
color: #073421
`;

const Label = styled.label`
margin-bottom: 1.5em;
display: block;
color: ##2d2232
`;

const Button = styled.button`
padding: 0.5em;
background: #98282c;
color: white;
font-size: 14px;
border-radius: 5px
`;

export {Form, Button, Label, Input}