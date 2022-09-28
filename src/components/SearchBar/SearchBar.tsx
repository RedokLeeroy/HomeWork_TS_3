import React from 'react';
import { toast, ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from "prop-types"
import s from "./SearchBar.module.css"

interface IProp{
  onSubmit : (arg: string) => void
}

export class SearchBar extends React.Component<IProp, {value: string} > { 
    
    state = {
        value : ""
    }
    
    handleSubmit = (event: React.MouseEvent<HTMLFormElement>):ToastContent<string> => {
        event.preventDefault()
        if (this.state.value.trim() !== "") {
                 this.props.onSubmit(this.state.value)
                this.setState({value: ""})   
        }else{
        return toast.error("You're request is empty")}

    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target as EventTarget & {value: string}
        return this.setState({value: value})}
    
    
    render() {return <header className={s.Searchbar}>
  <form className={s.searchForm} onSubmit={this.handleSubmit}>
    <button type="submit" className={s.button}>
      <span className={s.buttonLabel}>Search</span>
    </button>

    <input
        onChange={this.handleChange}
        value={this.state.value}
      className={s.input}
      type="text"
      placeholder="Search images and photos"
    />
  </form>
</header>
    }
}