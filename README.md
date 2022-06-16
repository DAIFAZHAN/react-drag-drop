# react-drag-drop
封装react-beautiful-dnd组件，便于项目开发使用

项目中可使用如下格式替代react-beautiful-dnd库的默认格式，接收属性相同

	<Drop>
      <DropChild>
 
          <Drag>
            {被拖拽组件}
          </Drag>
          
      </DropChild>
    </Drop>
    
    

```<Drop>``` 对应 ```<Droppable>```

```<DropChild>``` 与```<Drop>```一起使用，为对 ```<Droppable>``` 内provided.placeholder占位符的封装，无需在每次使用时添加provided.placeholder

```<Drag>```对应```<Draggable>```

<h2>Droppable和Drop、DropChild</h2>
原使用方式：
```
import { Droppable } from 'react-beautiful-dnd';

<Droppable droppableId="droppable-1">
  {(provided) => (
    <div
      ref={provided.innerRef}
      style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
      {...provided.droppableProps}
    >
      <h2>I am a droppable!</h2>
      {provided.placeholder}
    </div>
  )}
</Droppable>;
```
现使用方式：
```
<Droppable droppableId="droppable-1">
  <DropChild style={{ ...... }}>
      <h2>I am a droppable!</h2>
  <DropChild>
</Droppable>;
```

<h2>Draggable和Drag</h2>
原使用方式：
```
import { Draggable } from 'react-beautiful-dnd';

<Draggable draggableId="draggable-1" index={0}>
  {(provided, snapshot) => (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <h4>My draggable</h4>
    </div>
  )}
</Draggable>;
```
现使用方式：
```
<Drag draggableId="draggable-1" index={0}>
  n<h4>My draggable</h4>
</Draggable>;
```
