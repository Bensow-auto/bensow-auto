export const carBrands = [
  { value: "audi", label: "Audi" },
  { value: "bmw", label: "BMW" },
  { value: "citroen", label: "Citroën" },
  { value: "dacia", label: "Dacia" },
  { value: "fiat", label: "Fiat" },
  { value: "ford", label: "Ford" },
  { value: "honda", label: "Honda" },
  { value: "hyundai", label: "Hyundai" },
  { value: "jaguar", label: "Jaguar" },
  { value: "jeep", label: "Jeep" },
  { value: "kia", label: "Kia" },
  { value: "land-rover", label: "Land Rover" },
  { value: "lexus", label: "Lexus" },
  { value: "maserati", label: "Maserati" },
  { value: "mazda", label: "Mazda" },
  { value: "mercedes", label: "Mercedes-Benz" },
  { value: "mini", label: "Mini" },
  { value: "mitsubishi", label: "Mitsubishi" },
  { value: "nissan", label: "Nissan" },
  { value: "opel", label: "Opel" },
  { value: "peugeot", label: "Peugeot" },
  { value: "porsche", label: "Porsche" },
  { value: "renault", label: "Renault" },
  { value: "seat", label: "Seat" },
  { value: "skoda", label: "Skoda" },
  { value: "smart", label: "Smart" },
  { value: "subaru", label: "Subaru" },
  { value: "suzuki", label: "Suzuki" },
  { value: "tesla", label: "Tesla" },
  { value: "toyota", label: "Toyota" },
  { value: "volkswagen", label: "Volkswagen" },
  { value: "volvo", label: "Volvo" },
  { value: "autre", label: "Autre" },
]

export const fuelTypes = [
  { value: "essence", label: "Essence" },
  { value: "diesel", label: "Diesel" },
  { value: "hybride", label: "Hybride" },
  { value: "electrique", label: "Électrique" },
  { value: "gpl", label: "GPL" },
]

export const gearboxTypes = [
  { value: "manuelle", label: "Manuelle" },
  { value: "automatique", label: "Automatique" },
]

export const vehicleConditions = [
  { value: "excellent", label: "Excellent" },
  { value: "bon", label: "Bon" },
  { value: "correct", label: "Correct" },
  { value: "a_reviser", label: "À réviser" },
]

export const controleTechniqueStatus = [
  { value: "valide", label: "Valide" },
  { value: "a_faire", label: "À faire" },
  { value: "moins_6_mois", label: "Moins de 6 mois" },
]

// Generate years from current year to 2000
export const yearOptions = Array.from({ length: new Date().getFullYear() - 1999 }, (_, i) => {
  const year = new Date().getFullYear() - i
  return { value: year.toString(), label: year.toString() }
})
