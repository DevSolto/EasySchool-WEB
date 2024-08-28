import axios from 'axios';
import { Filter, UserResponse } from './types/users';

export async function getUsers(currentPage: number, itensPerPage: number, search: string, filter: Filter): Promise<UserResponse | undefined> {
  try {
    console.log(filter);

    const response = await axios.get(`https://q01b4kvh-3001.brs.devtunnels.ms/users`, {
      params: {
        offset: currentPage,
        limit: itensPerPage,
        search: search,
        students: filter.student ? 'true' : '',
        teachers: filter.teacher ? 'true' : '',
        admins: filter.admin ? 'true' : ''
      }
    });
    const data: UserResponse = response.data

    return data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return undefined;
  }
}
