import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import {userRegistrationSchema} from './validationSchema';
import {yupResolver} from "@hookform/resolvers/yup";
import {Box} from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Inputs = {
    name: string,
    surname: string,
    address: string,
    email: string,
    password: string,
};

const RegistrationForm = () => {

    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>(
        {
            mode: 'onBlur',
            reValidateMode: 'onBlur',
            resolver: yupResolver(userRegistrationSchema)
        }
    );
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    console.log(watch("name"))

    return (
        <Box component="form"
             sx={{
                 '& > :not(style)': {m: 1, width: '25ch'},
             }}
             onSubmit={handleSubmit(onSubmit)}
             autoComplete="off">
            <TextField label='Name'
                       placeholder="name" {...register("name")}
                       error={!!errors.name}
                       helperText={errors.name?.message}
            />
            <TextField label='Surname' placeholder="surname"{...register("surname")}
                       error={!!errors.surname}
                       helperText={errors.surname?.message}
            />
            <TextField label='Address' placeholder="address" {...register("address")}
                       error={!!errors.address}
                       helperText={errors.address?.message}
            />
            <TextField label='Email' placeholder="email" {...register("email")}
                       error={!!errors.email}
                       helperText={errors.email?.message}
            />
            <TextField label='Password' placeholder="password" {...register("password")}
                       error={!!errors.password}
                       helperText={errors.password?.message}
            />
            <Button type='submit' variant='text'>Submit</Button>
        </Box>
    );
};

export default RegistrationForm;
