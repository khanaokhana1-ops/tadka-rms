async function requireAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    window.location.href = 'login.html';
  }
  return session;
}

async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = 'login.html';
}
