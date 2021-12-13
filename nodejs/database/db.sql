CREATE DATABASE factory;

CREATE TABLE f_list(
    id_f SERIAL PRIMARY KEY,
    f_name TEXT NOT NULL,
    m_date DATE NOT NULL, /*member date */
    f_date DATE NOT NULL, /*finish member date */
    w_count NUMBER NOT NULL, /*worker count */
    s_member BOOLEAN NOT NULL /*special member */
);

CREATE TABLE f_name(
    f_id SERIAL PRIMARY KEY,
    id_fac INTEGER REFERENCES f_list(id_f),
    d_range DATE NOT NULL,
    u_kw NUMBER NOT NULL,
    u_price NUMBER NOT NULL, /*use price */
    d_price BOOLEAN NOT NULL /*discount price */
);