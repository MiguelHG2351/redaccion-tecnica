import globalStyles from './styles/globals'

export default function Layout (props) {
  return <>
    {props.children}
    <style jsx global>
        { globalStyles }
    </style>
</>
}
