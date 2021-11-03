import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import CountUp from 'react-countup';
const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log({ data });
  return (
    <div className="bg-prLightBlue text-white py-20 ">
      <div className="container ">
        <div className="sm:w-3/4 lg:w-2/4 mx-auto">
          <p className="font-light uppercase text-center mb-8 ">
            <CountUp start={35000} end={0} duration={20} separator="." />+
            ALREADY JOINED
          </p>
          <h1 className="text-3xl text-center">
            Stay up-to-date with what we're doing
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:flex-row gap-6  mt-8"
          >
            <input
              className="focus:outline-none flex-1 px-2 py-3 rounded-md text-black "
              placeholder="Enter your email address"
              {...register('singleErrorInput', {
                required: 'This is required.',
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />

            <button
              type="submit"
              className=" button-red bg-prLightRed text-white rounded-md px-7 py-3  hover:bg-white hover:text-prLightRed transition duration-300 "
            >
              Contact Us
            </button>
          </form>
          <ErrorMessage
            errors={errors}
            name="singleErrorInput"
            render={({ message }) => (
              <p className=" bg-prLightRed  px-2  rounded-md text-white">
                {message}
                {console.log(errors, message)}
              </p>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
