const formatValue = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  ); // TODO
// console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
export default formatValue;
