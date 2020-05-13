export function date(dateToFormat) {
    const date = new Date(dateToFormat)
    date.setDate(date.getDate())
    const mois = [
      'janvier', 'février', 'mars',
      'avril', 'mai', 'juin', 'jullet',
      'août', 'septembre', 'octobre',
      'novembre', 'décembre'
    ]
    const dateReformat = date.getDate() + ' ' + mois[date.getMonth()] + ' ' + date.getFullYear()
    return dateReformat
  }
