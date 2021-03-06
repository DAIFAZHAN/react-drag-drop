import {
  Draggable,
  DraggableProps,
  Droppable,
  DroppableProps,
  DroppableProvided,
  DroppableProvidedProps,
} from "react-beautiful-dnd";
import React, { ReactNode } from "react";

type DropProps = Omit<DroppableProps, "children"> & { children: ReactNode };
/**
 * 封装Droppable，配合DropChild
 * @param param0
 * @returns
 */
export const Drop = ({ children, ...props }: DropProps) => {
  return (
    <Droppable {...props}>
      {(provided) => {
        //provided来自Droppable
        if (React.isValidElement(children)) {
          return React.cloneElement(children, {
            ...provided.droppableProps,
            ref: provided.innerRef,
            provided,
          }); 
        }
        return <div />;
      }}
    </Droppable>
  );
};

/**
 * 因Drop的子元素需包含占位符，故传递ref封装
 */
type DropChildProps = Partial<
  { provided: DroppableProvided } & DroppableProvidedProps
> &
  React.HtmlHTMLAttributes<HTMLDivElement>;
export const DropChild = React.forwardRef<HTMLDivElement, DropChildProps>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
      {props.provided?.placeholder}
    </div>
  )
);

type DragProps = Omit<DraggableProps, "children"> & { children: ReactNode };
/**
 * 封装Draggable
 * @param param0
 * @returns
 */
export const Drag = ({ children, ...props }: DragProps) => {
  return (
    <Draggable {...props}>
      {(provided) => {
        //provided来自Draggable
        if (React.isValidElement(children)) {
          return React.cloneElement(children, {
            //children接收来自Draggable的provided
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            ref: provided.innerRef,
          });
        }
        return <div />;
      }}
    </Draggable>
  );
};
