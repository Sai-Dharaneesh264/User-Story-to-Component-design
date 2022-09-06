import React from 'react'
import male from '../../../assets/icons/male.png';
import female from "../../../assets/icons/female.png";
interface IconProps {
  gender: 'male' | 'female';
}
const Icon = ({ gender }: IconProps) => {
  return (
    <>
    <img width="30px" height="30px" src={gender === "male" ? male : female} />
    </>
  )
}

export default Icon