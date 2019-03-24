package com.rhiodamuthie.restfulws.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by W on 3/24/2019.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
//@Entity
//@Table(name = "HelloWorldBean2")
public class HelloWorldBean2 {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String message;

    @Column(name = "created_at")
    private Date createdAt = new Date();

//    public HelloWorldBean2(long id, String message) {
//    }
}
