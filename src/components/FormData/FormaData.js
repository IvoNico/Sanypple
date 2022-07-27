import './FormData.css'
export const FormData = ({handleSubmit, handleInputChange}) =>{
    return(
        <form className="form" onSubmit={handleSubmit}>
                    <h3>checkout</h3>
                        <label htmlFor='Name'>Name</label>
                        <input id='name'
                            type='text'
                            placeholder='Name'
                            name='name'
                            onChange={handleInputChange}
                            autoComplete='off' />

                        <label htmlFor='Email'>Email</label>
                        <input id='email'
                            type='email'
                            placeholder='Email'
                            name='email'
                            
                            onChange={handleInputChange}
                            autoComplete='off' />

                        <label htmlFor='Phone'>Phone</label>
                        <input id='phone'
                            type='text'
                            placeholder='Phone number'
                            name='phone'
                            onChange={handleInputChange}
                            autoComplete='off' />
                        
                        <input type='submit' value='Comprar' />
                </form>
    )
}