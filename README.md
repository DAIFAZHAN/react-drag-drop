# react-drag-drop
封装react-beautiful-dnd组件，便于项目开发使用

项目中可使用

	<Drop>
      <DropChild>
 
          <Drag>
            {被拖拽组件}
          </Drag>
          
      </DropChild>
    </Drop>
    
    
替代库的默认格式，接收属性相同

```<Drop>``` 对应 ```<Droppable>```

```<DropChild>``` 与```<Drop>```一起使用，为对 ```<Droppable>``` 内provided.placeholder占位符的封装，无需在每次使用时添加provided.placeholder

```<Drag>```对应```<Draggable>```
