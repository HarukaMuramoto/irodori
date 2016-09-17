import * as React from "react";

export interface HeaderProps {}

export class Header extends React.Component<HeaderProps, {}> {
    render() {
        return (
          <header id="header">
          <img id="mocchan5" src="img/mocchan5.png"/>
          </header>
        );
    }
}
