/**
 * Valida se as variáveis de ambiente necessárias foram definidas.
 * Lança um erro detalhando quais variáveis estão faltando.
 */
export const requiredEnvs = (envs: string[]) => {
  const missingEnvs = envs.filter((env) => !process.env[env]);

  if (missingEnvs.length > 0) {
    throw new Error(
      `As seguintes variáveis de ambiente são obrigatórias e não foram encontradas: ${missingEnvs.join(
        ', ',
      )}`,
    );
  }
};
