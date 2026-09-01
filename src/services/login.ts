export function login(name: string): void {
  const normalizedName = name.trim();

  window.alert(`Bem vinda ${normalizedName}!`);
}