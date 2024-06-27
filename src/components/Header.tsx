import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: (title: string) => void
}


export const Header:React.FC<Props> = ({onAddTodo}) => {
  return (
    <header className='header'>
        <h1>Todo <img 
            style={{width: '60px', height: 'auto'}}
            src="https://w7.pngwing.com/pngs/616/528/png-transparent-angularjs-typescript-javascript-vue-js-others-blue-angle-text-thumbnail.png" alt="imagen de typescript" 
        /></h1>
        <CreateTodo saveTodo={onAddTodo} />

    </header>
  )
}
