

import React from 'react';
import {useParams, Link} from "react-router-dom";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

import { bindActionCreators } from 'redux'
import {useSelector,useDispatch} from 'react-redux'
import * as PokemonActionsCreators from '../store/modules/pokemons/actions'

import './Detail.css'

export default function Edit() {
    const { id } = useParams();
    const pokemonsActions = bindActionCreators(PokemonActionsCreators, useDispatch())
    const pokemon = useSelector(state => state.pokemons.find(pokemon => pokemon.id === id))

    const handleUpdatePokemon = pokemon => {
      pokemonsActions.updatePokemon(pokemon)
    }

    return (
      <div className="App">
        <Formik
          enableReinitialize={true}
          initialValues={pokemon}
          validate={values => {
            /*
            const errors = {};
            if (!values.firstName) {
              errors.firstName = "Required";
            }
            return errors;*/
          }}
       
          onSubmit={(values, { setSubmitting }) => {
          console.log("Values aqui=>",values)

            handleUpdatePokemon(values)
            /*
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
            */
          }}
        >
          {({ isSubmitting,formikProps, values }) => (
            <Form>
              <Field type="text" name="name" />
              <FieldArray
                name="types"
                render={arrayHelpers => (
               <div>
                 {values.types && values.types.length > 0 ? (
                   values.types.map((type, index) => (
                     <div key={index}>
                       <Field type="text" value={type} name={`types[${index}]`} />
                     </div>
                   ))
                 ) : (
                   null
                 )}
                </div>
                )}
              />

              <FieldArray
                name="attacks"
                render={arrayHelpers => (
               <div>
                 {values.attacks.fast && values.attacks.fast.length > 0 ? (
                   values.attacks.fast.map((attack, index) => (
                     <div key={`fast${index}`}>
                       <Field type="text" value={attack.name} name={`attacks.fast[${index}].name`} />
                       <Field type="text" value={attack.type} name={`attacks.fast[${index}].type`} />
                       <Field type="text" value={attack.damage} name={`attacks.fast[${index}].damage`} />
                     </div>
                   ))
                 ) : (
                   null
                 )}
                </div>
                )}
              />

              <FieldArray
                name="attacks"
                render={arrayHelpers => (
               <div>
                 {values.attacks.special && values.attacks.special.length > 0 ? (
                   values.attacks.special.map((attack, index) => (
                     <div key={`special${index}`}>
                       <Field type="text" value={attack.name} name={`attacks.special[${index}].name`} />
                       <Field type="text" value={attack.type} name={`attacks.special[${index}].type`} />
                       <Field type="text" value={attack.damage} name={`attacks.special[${index}].damage`} />
                     </div>
                   ))
                 ) : (
                   null
                 )}
                </div>
                )}
              />
              {/*
              <br />
              <ErrorMessage name="firstName" component="div" />
              <br />
              <Field type="text" name="lastName" />
              <br />
              <ErrorMessage name="lastName" component="div" />
              <br />
              */}
              <button type="submit" >
                Submit
              </button>
              <Link to={'/'}>INICIO</Link>
            </Form>
          )}
        </Formik>
      </div>
    );

}
