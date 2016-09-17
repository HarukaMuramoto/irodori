import * as React from "react";

import { Header } from "./Header";
import { TopImg } from "./TopImg";
import { Content1 } from "./Content1";
import { Content2 } from "./Content2";




export interface MainProps {}

export class Main extends React.Component<MainProps, {}> {
    render() {
        return (
          <div>
            <Header />
            <TopImg />
            <Content1 />
            <Content2 />
          </div>
        );
    }
}
