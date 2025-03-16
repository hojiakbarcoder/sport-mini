import React from 'react'
import { ImSpinner6 } from 'react-icons/im'

const Spinner = ({ classNames }) => {
	return <ImSpinner6 className={`animate-spin ${classNames}`} />
}

export default Spinner
