export function setBasicInfo(data) {
  return {type: 'BASIC_INFO_FORM', payload: data}
}

export function setPersonalInfo(data) {
  return {type: 'PERSONAL_INFO_FORM', payload: data}
}

export function completeForm() {
  return {type: 'COMPLETE_FORM'}
}