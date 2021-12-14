CREATE DATABASE factory;

CREATE TABLE ad(
    id_a SERIAL PRIMARY KEY,
    a_name TEXT NOT NULL,
    a_email TEXT NOT NULL UNIQUE,
    a_password TEXT NOT NULL
);

CREATE TABLE ed(
    id_e SERIAL PRIMARY KEY,
    e_name TEXT NOT NULL,
    e_email TEXT NOT NULL UNIQUE,
    e_password TEXT NOT NULL
);

CREATE TABLE f_list(
    id_f SERIAL PRIMARY KEY,
    f_name TEXT NOT NULL,
    m_date DATE NOT NULL, /*member date */
    f_date DATE NOT NULL, /*finish member date */
    w_count INTEGER NOT NULL, /*worker count */
    s_member BOOLEAN NOT NULL /*special member */
);

CREATE TABLE f_name(
    f_id SERIAL PRIMARY KEY,
    id_fac INTEGER REFERENCES f_list(id_f),
    d_range DATE NOT NULL,
    u_kw INTEGER NOT NULL,
    u_price INTEGER NOT NULL, /*use price */
    d_price BOOLEAN NOT NULL /*discount price */
);