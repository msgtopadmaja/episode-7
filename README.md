# Food app- React Hooks

//React.createElement ==> object, when it is render in DOM it is HTML element

/\*
Header

- logo
- menu item or nav item
  Body
- Search
- RestaurantContainer
  - Restaurant card - Restaurant name - Rating - cuisine - delivery time
    Footer
- copyright
- links
- address
- contact us
  \*/

Two Types of Export/Import

- Default Export/Import

export default "<name of Component or var>"
import "<name of Component or var>" from 'path';

- Named Export/Import

export const Component;
import {Component} from 'path';

# React Hook

- Normal Javascript function which is written by facebook developer.
- Where did they write this utility function --> inside of react which import inside (npm install)
- import the utility function and we can use it from react
- Two important Hooks - useState() -> superpowerful State variable in react and useEffect()
- whenever the state variable is update, React will be re-rendered the component
- React will keep your UI sinck with the data layer. In the data layer you have a local state variable as soon as data layer is update your UI layer is updated by using re-render.
