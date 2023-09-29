import { ChangeEvent, FormEvent, useState } from 'react';

export const AddCategory = ({ newCategory } : { newCategory: (value: string) => void }): JSX.Element => {
    
    const [value, setValue] = useState<string>('');

    const onInputChange = ({target}: ChangeEvent<HTMLInputElement>): void => {
        setValue( target.value );
    }

    const onSubmit = ( event: FormEvent): void => {
        event.preventDefault();
        if( value.trim().length <= 1 ) return;
        newCategory(value);
        setValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Add category" 
                value={ value }
                onChange={ onInputChange }
            />
        </form>
  )
}
