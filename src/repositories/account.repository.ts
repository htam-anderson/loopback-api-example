import {DefaultCrudRepository} from '@loopback/repository';
import {Account, AccountRelations} from '../models';
import {MysqlDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AccountRepository extends DefaultCrudRepository<
  Account,
  typeof Account.prototype.account_id,
  AccountRelations
> {
  constructor(
    @inject('datasources.mysql_db') dataSource: MysqlDbDataSource,
  ) {
    super(Account, dataSource);
  }
}
