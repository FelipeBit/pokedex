

import React from 'react';
import {useParams, useHistory} from "react-router-dom";

import { Formik, Form, Field, FieldArray } from "formik";

import { bindActionCreators } from 'redux'
import {useSelector,useDispatch} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

import * as PokemonActionsCreators from '../store/modules/pokemons/actions'

import 'react-toastify/dist/ReactToastify.css';
import './Edit.css'

export default function Edit() {
    const { id } = useParams();
    const pokemonsActions = bindActionCreators(PokemonActionsCreators, useDispatch())
    const pokemon = useSelector(state => state.pokemons.find(pokemon => pokemon.id === id))

    const history = useHistory();

    function handleBackHome() {
      history.push("/");
    }

    const notifySucess = () => toast.success('Salvo com sucesso!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    const notifyError = (errorMessage) => toast.error(errorMessage, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,      
    });

    const handleUpdatePokemon = pokemon => {
      try {
        pokemonsActions.updatePokemon(pokemon)
        notifySucess()
      } catch (error) {
        notifyError(error)
      }
    }

    return (
     
        <Formik
          enableReinitialize={true}
          initialValues={pokemon}
          validate={values => {
          }}      
          onSubmit={(values, { setSubmitting }) => {
            handleUpdatePokemon(values)
          }}
        >
          {({ isSubmitting,formikProps, values }) => (
            <Form>
              <div className="edit-card">
                <section className="name-and-image">
                  <h1>POKEMON</h1>
                  <div className="pokemon-edit-name">
                    <label htmlFor='name'>Name:</label>
                    <Field label="Name" type="text" name="name" />
                  </div>
                  <div className="pokemon-edit-image">
                    <img src={values.image} alt={`pokemon ${values.image}`} className="pokemon-img-detail" loading="lazy"/>
                  </div>
                  <button onClick={handleBackHome}>BACK TO HOME PAGE</button>
                </section>
                <div className='pokemon-info'>
                  <FieldArray
                    name="types"
                    render={() => (
                    
                      <section>
                        <h2>TYPES</h2>
                        {values.types && values.types.length > 0 ? (
                          values.types.map((type, index) => (
                            <div key={index} className="type-wrapper">
                              <label htmlFor={`types[${index}]`}>Type:</label>
                              <Field type="text" value={type} name={`types[${index}]`} />
                            </div>
                          ))) : null 
                        }
                      </section>
                    )}
                  />

                  <section>
                    <h2>ATTACKS</h2>
                    <FieldArray
                      name="attacks"
                      render={() => (
                        <section>
                          <h3>FAST</h3>
                          {values.attacks.fast && values.attacks.fast.length > 0 ? (
                            values.attacks.fast.map((attack, index) => (
                              <div key={`fast${index}`} className="info-wrapper">
                                <label htmlFor={`attacks.fast[${index}].name`}>Name:</label>
                                <Field type="text" value={attack.name} name={`attacks.fast[${index}].name`} />
                                <label htmlFor={`attacks.fast[${index}].type`}>Type:</label>
                                <Field type="text" value={attack.type} name={`attacks.fast[${index}].type`} />
                                <label htmlFor={`attacks.fast[${index}].damage`}>Damage:</label>
                                <Field type="text" value={attack.damage} name={`attacks.fast[${index}].damage`} />
                              </div>
                            ))) :  null
                          }
                        </section>
                      )}
                    />

                    <FieldArray
                      name="attacks"
                      render={() => (
                        <section>
                          <h3>SPECIAL</h3>
                          {values.attacks.special && values.attacks.special.length > 0 ? (
                            values.attacks.special.map((attack, index) => (
                              <div key={`special${index}`} className="info-wrapper" >
                                <label htmlFor={`attacks.special[${index}].name`}>Name:</label>
                                <Field type="text" value={attack.name} name={`attacks.special[${index}].name`} />
                                <label htmlFor={`attacks.special[${index}].type`}>Type:</label>
                                <Field type="text" value={attack.type} name={`attacks.special[${index}].type`} />
                                <label htmlFor={`attacks.special[${index}].damage`}>Damage:</label>
                                <Field type="text" value={attack.damage} name={`attacks.special[${index}].damage`} />
                              </div>
                            ))) : null
                          }
                        </section>
                      )}
                    />
                  </section>
                  <button type="submit" className="submit-button" data-testid="savePokemon">
                    Submit
                  </button>
                  
                </div>
              </div>
              <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </Form>
          )}
        </Formik>
    
    )}