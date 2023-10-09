import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: 'button' | 'submit'
}

export interface SearchManufacturerProps {
  manufacturer?: string
  setManufacturer?: (manufacturer: string) => void
}

export interface CarProps {
  city_mpg: number
  combination_mpg: number
  cylinders: number
  displacement: number
  highway_mpg: number
  transmission: string
  year: number
  class: string
  drive: string
  fuel_type: string
  make: string
  model: string
}