import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Transformer } from "react-konva";


class Rectangle extends React.Component {
  render() {
    return (
      <Rect
        x={this.props.x}
        y={this.props.y}
        width={this.props.width}
        height={this.props.height}
        fill={this.props.fill}
        name={this.props.name}
        onDragMove={e => {
          e.target.x(Math.round(e.target.x() / 10) * 10);
          e.target.y(Math.round(e.target.y() / 10) * 10);
        }}
        draggable
      />
    );
  }
}

class TransformerComponent extends React.Component {
  componentDidMount() {
    this.checkNode();
  }
  componentDidUpdate() {
    this.checkNode();
  }
  checkNode() {
    // here we need to manually attach or detach Transformer node
    const stage = this.transformer.getStage();
    const { selectedShapeName } = this.props;

    const selectedNode = stage.findOne("." + selectedShapeName);
    // do nothing if selected node is already attached
    if (selectedNode === this.transformer.node()) {
      return;
    }

    if (selectedNode) {
      // attach to another node
      this.transformer.attachTo(selectedNode);
    } else {
      // remove transformer
      this.transformer.detach();
    }
    this.transformer.getLayer().batchDraw();
  }
  render() {
    return (
      <Transformer
        ref={node => {
          this.transformer = node;
        }}
        boundBoxFunc={(oldBox, newBox) => {
          newBox.width = Math.round(newBox.width / 10) * 10;
          newBox.height = Math.round(newBox.height / 10) * 10;
          return newBox;
        }}
      />
    );
  }
}

class App extends Component {
  state = {
    rectangles: [
      {
        x: 10,
        y: 10,
        width: 100,
        height: 100,
        fill: "red",
        name: "rect1"
      },
      {
        x: 150,
        y: 150,
        width: 100,
        height: 100,
        fill: "green",
        name: "rect2"
      }
    ],
    selectedShapeName: ""
  };
  handleStageMouseDown = e => {
    // clicked on stage - cler selection
    if (e.target === e.target.getStage()) {
      this.setState({
        selectedShapeName: ""
      });
      return;
    }
    // clicked on transformer - do nothing
    const clickedOnTransformer =
      e.target.getParent().className === "Transformer";
    if (clickedOnTransformer) {
      return;
    }

    // find clicked rect by its name
    const name = e.target.name();
    const rect = this.state.rectangles.find(r => r.name === name);
    if (rect) {
      this.setState({
        selectedShapeName: name
      });
    } else {
      this.setState({
        selectedShapeName: ""
      });
    }
  };
  
  render() {
    return (
      <Stage
        width={global.innerWidth}
        height={global.innerHeight}
        onMouseDown={this.handleStageMouseDown}
      >
        <Layer>
          {this.state.rectangles.map((rect, i) => (
            <Rectangle key={i} {...rect} />
          ))}
          <TransformerComponent
            selectedShapeName={this.state.selectedShapeName}
          />
        </Layer>
      </Stage>
    );
  }
}

export default App
