package com.rhiodamuthie.restfulws.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Bean;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by W on 3/24/2019.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "HelloWorldBean")
public class HelloWorldBean {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String message;

    @Column(name = "created_at")
    private Date createdAt = new Date();

    public HelloWorldBean(String s) {
    }


//    @Column(name = "created_at")
//    private Date createdAt = new Date();

//    public HelloWorldBean(String message) {
//    }
//
//    public String getMessage() {
//        return message;
//    }
//
//    public void setMessage(String message) {
//        this.message = message;
//    }
}
