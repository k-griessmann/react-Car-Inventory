import Button from './Button'
import Input from './Input'

import { useForm } from 'react-hook-form';
import { server_calls } from '../api/server';
import { useDispatch, useStore } from 'react-redux';
import { chooseMake, chooseModel, chooseColor, chooseYear } from '../redux/slices/RootSlice';


interface ContactFormProps {
    id?: string[];
    onClose: () => void
}

const ContactForm = ( props:ContactFormProps ) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch(); 
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id ) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data } ${ props.id }`)
            setTimeout(() => { window.location.reload() }, 5000);
            event.target.reset()
        } else {
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseYear(data.year));
            dispatch(chooseColor(data.color));

            server_calls.create(store.getState())
            setTimeout(() => { window.location.reload() }, 5000);

    
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Car Make</label>
                    <Input {...register('make')} name='make' placeholder='Car Make' />
                </div>
                <div>
                    <label htmlFor="name">Car Model</label>
                    <Input {...register('model')} name='model' placeholder='Car Model' />
                </div>
                <div>
                    <label htmlFor="color">Car Color</label>
                    <Input {...register('color')} name='color' placeholder='Car Color' />
                </div>
                <div>
                    <label htmlFor="year">Car Year</label>
                    <Input {...register('year')} name='year' placeholder='Car Year' />
                </div>
                    <Button className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'>
                        Submit
                    </Button>
            </form>
        </div>
    )
}

export default ContactForm