package com.rhiodamuthie.restfulws.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@AllArgsConstructor
@NoArgsConstructor
//@Entity
//@Table(name = "AUTH")
public class Auth {

    private String message;
}
