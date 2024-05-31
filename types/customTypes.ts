interface SessionUser {
  _id: string,
  email: string,
  username: string,
  image: string,
  expList: Array<Expansion>
}

type Expansion = {
  _id: string,
  name: string,
  color: string
}

type Die = {
  _id: string,
  die_type: string,
  faces: Array<string>,
  rotatable: boolean
}

type Face = {
  image: string,
  rotatable: boolean
}

type Objective = {
  _id: string,
  exp: string,
  image: string,
  description: string
}

type Blueprint = {
  _id: string,
  name: string,
  image: string
}