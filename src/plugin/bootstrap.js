
export default function Initializer() {
  !import.meta.env.PROD && console.log('app bootstrapped', import.meta.env)
}