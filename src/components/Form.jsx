import {Form, Button, FormControl} from 'react-bootstrap'
export const MyForm =({changeId, id,addItems, items, item, addItem})=>{
    const handleSubmit =(e)=>{
        e.preventDefault();
        let newId = id + 1;
        changeId(newId)
        addItems([...items,{id:newId, msg:item}])
        addItem("")
        e.target[0].value=""
    }
    return(
        <>
        <Form 
        onSubmit={handleSubmit}>
            <FormControl
            type='text'
            placeholder='add one item'
            onChange={(e)=>addItem(e.target.value)}
            className='m-3'
            // value={item.msg}
            >
            </FormControl>
            <Button type='submit'>Add</Button>
        </Form>
        </>
    )
}