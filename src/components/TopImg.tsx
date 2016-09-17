import * as React from "react";



export interface TopImgProps {}

export class TopImg extends React.Component<TopImgProps, {}> {
    render() {
        return (
          <div>
            <img id="top-img" src="img/flower.jpg" />
            <div>
            <p id="title">Irodori</p>
            <img id="applestore" src="img/applestore.png" />
            <img id="smartphone" src="img/smartphone.png" />
            </div>
          </div>
        );
    }
}
