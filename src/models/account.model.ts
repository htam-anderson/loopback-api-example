import {Entity, model, property} from '@loopback/repository';

@model()
export class Account extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  account_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  account_name: string;

  @property({
    type: 'string',
    required: true,
  })
  account_email: string;

  @property({
    type: 'string',
    required: true,
  })
  account_type: string;

  @property({
    type: 'date',
    required: true,
  })
  created_date: string;

  @property({
    type: 'date',
    required: true,
  })
  updated_date: string;


  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;
